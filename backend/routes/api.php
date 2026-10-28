<?php
declare(strict_types=1);

use SLM\Router;
use SLM\Controllers\ContactController;
use SLM\Controllers\MetaController;

/** @var Router $router */
$router->get('/api/v1/health', fn() => (new ContactController())->health());
$router->post('/api/v1/contact', fn() => (new ContactController())->store());
$router->post('/api/v1/newsletter/subscribe', fn() => (new ContactController())->subscribe());
$router->post('/api/v1/meta/webhook', fn() => (new MetaController())->webhook());
$router->post('/api/v1/meta/data-deletion', fn() => (new MetaController())->dataDeletion());
