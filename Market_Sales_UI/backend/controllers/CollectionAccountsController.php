<?php

namespace backend\controllers;

use Yii;
use backend\models\CollectionAccounts;
use backend\models\CollectionAccountsSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\helpers\Json;

/**
 * CollectionAccountsController implements the CRUD actions for CollectionAccounts model.
 */
class CollectionAccountsController extends Controller {

    /**
     * {@inheritdoc}
     */
    public function behaviors() {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['index', 'create', 'update', 'delete', 'view'],
                'rules' => [
                    [
                        'actions' => ['index', 'create', 'update', 'delete', 'view'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all CollectionAccounts models.
     * @return mixed
     */
    public function actionIndex() {
        $model = new CollectionAccounts();
        $searchModel = new CollectionAccountsSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
        $dataProvider->pagination = ['pageSize' => 15,];
        if (Yii::$app->request->post('hasEditable')) {
            $account_id = Yii::$app->request->post('editableKey');
            $model = CollectionAccounts::findOne($account_id);
            $out = Json::encode(['output' => '', 'message' => '']);
            $posted = current($_POST['CollectionAccounts']);
            $msg = "";
            $post = ['CollectionAccounts' => $posted];
            if ($model->load($post) && $model->validate()) {
                $model->modified_by = Yii::$app->user->identity->user_id;
                $success = $model->save();
                $errors = $model->getErrors();
                $output = '';
                $message = '';
                if (!$success) {
                    foreach ($errors as $error) {
                        $message .= $error[0];
                    }
                }
                $out = Json::encode(['output' => $output, 'message' => $message]);
            }
            return $out;
        }
        return $this->render('index', [
                    'searchModel' => $searchModel,
                    'dataProvider' => $dataProvider,
                    'model' => $model
        ]);
    }

    /**
     * Displays a single CollectionAccounts model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id) {
        return $this->render('view', [
                    'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new CollectionAccounts model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate() {
        if (\backend\models\User::userIsAllowedTo('Manage collection accounts')) {
            $model = new CollectionAccounts();
            if (Yii::$app->request->isAjax) {
                $model->load(Yii::$app->request->post());
                return Json::encode(\yii\widgets\ActiveForm::validate($model));
            }

            if ($model->load(Yii::$app->request->post())) {
                $model->status = 0;
                $model->created_by = Yii::$app->user->identity->user_id;
                $model->modified_by = Yii::$app->user->identity->user_id;
                if ($model->save()) {
                    Yii::$app->session->setFlash('success', "Collection account was successfully added.");
                    return $this->redirect(['index']);
                } else {
                    $errors = $model->getErrors();
                    $message = '';
                    foreach ($errors as $error) {
                        $message .= $error[0];
                    }
                    Yii::$app->session->setFlash('error', "Collection account was not added. Please try again! ERROR:: $message");
                    return $this->redirect(['index']);
                }
            }

            return $this->render('create', [
                        'model' => $model,
            ]);
        } else {
            Yii::$app->session->setFlash('error', 'You are not authorised to perform that action.');
            return $this->redirect(['site/home']);
        }
    }

    /**
     * Updates an existing CollectionAccounts model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    /*public function actionUpdate($id) {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
                    'model' => $model,
        ]);
    }*/

    /**
     * Deletes an existing CollectionAccounts model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id) {
      if (\backend\models\User::userIsAllowedTo('Manage collection accounts')) {
            $model = $this->findModel($id);
            if ($model->delete()) {
                Yii::$app->session->setFlash('success', "Collection account:".$model->name." was successfully removed.");
            } else {
                Yii::$app->session->setFlash('error', "Collection account was not be removed. Please try again!");
            }

            return $this->redirect(['index']);
        } else {
            Yii::$app->session->setFlash('error', 'You are not authorised to perform that action.');
            return $this->redirect(['site/home']);
        }
    }

    /**
     * Finds the CollectionAccounts model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return CollectionAccounts the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id) {
        if (($model = CollectionAccounts::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

}
