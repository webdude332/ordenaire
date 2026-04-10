<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// ─── Public Routes ──────────────────────────────────
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

Route::get('/reset-password', function () {
    return Inertia::render('PasswordReset');
})->name('reset.password');

Route::get('/password-otp', function () {
    return Inertia::render('PasswordOTP');
})->name('password.otp');

Route::get('/setnewpassword', function () {
    return Inertia::render('SendNewPassword');
})->name('setnewpassword');


// ─── Super Admin Routes ─────────────────────────────
Route::prefix('superadmin')->name('superadmin.')->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('reports', function () {
        return Inertia::render('Reports');
    })->name('reports');

    Route::get('reportspage', function () {
        return Inertia::render('ReportsPage');
    })->name('reportspage');

    Route::get('usermanagement', function () {
        return Inertia::render('UserManagement');
    })->name('usermanagement');

    Route::get('business-management', function () {
        return Inertia::render('BusinessManagement');
    })->name('business.management');

    Route::get('subscription-and-billing', function () {
        return Inertia::render('SubscriptionsAndBilling');
    })->name('subscription.and.billing');

    Route::get('subscription-and-billing/subscriptiondetail', function () {
        return Inertia::render('SubscriptionDetail');
    })->name('subscription.and.billing.subscriptiondetail');

    Route::get('subscription-and-billing/subscriptionprofile', function () {
        return Inertia::render('SubscriptionProfile');
    })->name('subscription.and.billing.subscriptionprofile');

    Route::get('system-config', function () {
        return Inertia::render('SystemConfig');
    })->name('system.config');

    Route::get('maintinance-and-support', function () {
        return Inertia::render('MaintinanceAndSupport');
    })->name('maintinance.and.support');

    Route::get('communication-management', function () {
        return Inertia::render('CommunicationManagement');
    })->name('communication.management');

    Route::get('marketplace-and-apps', function () {
        return Inertia::render('MarketplaceAndIntigrations');
    })->name('marketplace.and.apps');

    Route::get('manage-approvals', function () {
        return Inertia::render('ManageApprovals');
    })->name('manage.approvals');

    Route::get('my-tickets', function () {
        return Inertia::render('MyTickets');
    })->name('my.tickets');

    Route::get('settings', function () {
        return Inertia::render('SettingsPage');
    })->name('settings');

    Route::get('myprofile', function () {
        return Inertia::render('MyProfile');
    })->name('myprofile');

    // ─── Users ──────────────────────────────────────
    Route::get('users/create', function () {
        return Inertia::render('AddUser');
    })->name('users.create');

    Route::get('users/edit', function () {
        return Inertia::render('EditUser');
    })->name('users.edit');

    Route::get('users/profile', function () {
        return Inertia::render('ProfilePage');
    })->name('users.profile');

    Route::get('users/addrole', function () {
        return Inertia::render('AddRole');
    })->name('users.addrole');

    Route::get('users/editrole', function () {
        return Inertia::render('EditRole');
    })->name('users.editrole');

    // ─── Business ───────────────────────────────────
    Route::get('business/addbusiness', function () {
        return Inertia::render('RegisterBusiness');
    })->name('business.addbusiness');

    Route::get('business/operationalconfig', function () {
        return Inertia::render('OperationalConfig');
    })->name('business.operationalconfig');

    Route::get('business/subscriptioncompliance', function () {
        return Inertia::render('SubscriptionCompliance');
    })->name('business.subscriptioncompliance');

    Route::get('business/teamaccess', function () {
        return Inertia::render('TeamAccess');
    })->name('business.teamaccess');

    Route::get('business/reviewconfirm', function () {
        return Inertia::render('ReviewConfirm');
    })->name('business.reviewconfirm');

    Route::get('business/registerwizard', function () {
        return Inertia::render('RegisterWizard');
    })->name('business.registerwizard');

    Route::get('business/editbusiness', function () {
        return Inertia::render('EditBusiness');
    })->name('business.editbusiness');

    Route::get('business/businessoverview', function () {
        return Inertia::render('BusinessOverview');
    })->name('business.businessoverview');

    Route::get('business/businessoverviewchild', function () {
        return Inertia::render('BusinessOverviewChild');
    })->name('business.businessoverviewchild');

    Route::get('business/businessoverviewchildparent', function () {
        return Inertia::render('BusinessOverviewChildParent');
    })->name('business.businessoverviewchildparent');

});

// ─── Admin Routes ───────────────────────────────────
Route::prefix('admin')->name('admin.')->group(function () {

    Route::get('dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    Route::get('menu', function () {
        return Inertia::render('Admin/Menu');
    })->name('menu');

    Route::get('orders', function () {
        return Inertia::render('Admin/Orders');
    })->name('orders');

    Route::get('inventory', function () {
        return Inertia::render('Admin/Inventory');
    })->name('inventory');

    Route::get('online-store', function () {
        return Inertia::render('Admin/OnlineSotre');
    })->name('online.store');

    Route::get('promotions', function () {
        return Inertia::render('Admin/Promotions');
    })->name('promotions');

    Route::get('engage-by-ordenaire', function () {
        return Inertia::render('Admin/EngageByOrdenaire');
    })->name('engage');

    Route::get('customers', function () {
        return Inertia::render('Admin/Customers');
    })->name('customers');

    Route::get('screens-and-devices', function () {
        return Inertia::render('Admin/ScreensAndDevices');
    })->name('screens.and.devices');

    Route::get('accounts', function () {
        return Inertia::render('Admin/Accounts');
    })->name('accounts');

    Route::get('internal-users', function () {
        return Inertia::render('Admin/InternalUsers');
    })->name('internal.users');

    Route::get('reports', function () {
        return Inertia::render('Admin/Reports');
    })->name('reports');

    Route::get('marketplace', function () {
        return Inertia::render('Admin/MarketPlace');
    })->name('marketplace');

});

require __DIR__.'/settings.php';