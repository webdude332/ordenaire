<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/login', function () {
    return Inertia::render('LoginPage');
})->name('login');

Route::get('/forgot-pass', function () {
    return Inertia::render('ForgotPass');
})->name('forgot.pass');

Route::get('/login-super-admin', function () {
    return Inertia::render('LoginSuperAdmin');
})->name('login.super.admin');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->name('dashboard');

Route::get('reports', function () {
    return Inertia::render('Reports');
})->name('reports');

Route::get('usermanagement', function () {
    return Inertia::render('UserManagement');
})->name('usermanagement');

Route::get('busines-management', function () {
    return Inertia::render('BusinessManagement');
})->name('busines.management');

Route::get('subscription-and-billing', function () {
    return Inertia::render('SubscriptionsAndBilling');
})->name('subscription.and.billing');

Route::get('system-config', function () {
    return Inertia::render('SystemConfig');
})->name('system.config');

Route::get('maintinance-and-support', function () {
    return Inertia::render('MaintinanceAndSupport');
})->name('maintinance.and.support');

Route::get('communication-management', function () {
    return Inertia::render('CommunicationManagement');
})->name('communication.management');

Route::get('marketplace-and-intigrations', function () {
    return Inertia::render('MarketplaceAndIntigrations');
})->name('marketplace.and.intigrations');

Route::get('manage-approvals', function () {
    return Inertia::render('ManageApprovals');
})->name('manage.approvals');

Route::get('my-tickets', function () {
    return Inertia::render('MyTickets');
})->name('my.tickets');

Route::get('settings', function () {
    return Inertia::render('SettingsPage');
})->name('settings');

Route::get('reportspage', function () {
    return Inertia::render('ReportsPage');
})->name('reportspage');

Route::get('/users/create', function () {
    return Inertia::render('AddUser');
})->name('users.create');

Route::get('/users/edit', function () {
    return Inertia::render('EditUser');
})->name('users.edit');

Route::get('/users/profile', function () {
    return Inertia::render('ProfilePage');
})->name('users.profile');

Route::get('/users/addrole', function () {
    return Inertia::render('AddRole');
})->name('users.addrole');

Route::get('/users/editrole', function () {
    return Inertia::render('EditRole');
})->name('users.editrole');

Route::get('/business/addbusiness', function () {
    return Inertia::render('RegisterBusiness');
})->name('business.addbusiness');

Route::get('/business/operationalconfig', function () {
    return Inertia::render('OperationalConfig');
})->name('business.operationalconfig');

Route::get('/business/subscriptioncompliance', function () {
    return Inertia::render('SubscriptionCompliance');
})->name('business.subscriptioncompliance');

Route::get('/business/teamaccess', function () {
    return Inertia::render('TeamAccess');
})->name('business.teamaccess');

Route::get('/business/reviewconfirm', function () {
    return Inertia::render('ReviewConfirm');
})->name('business.reviewconfirm');

require __DIR__.'/settings.php';