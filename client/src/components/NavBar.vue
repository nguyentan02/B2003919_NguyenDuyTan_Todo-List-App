<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'home' }" href="#">TODO</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#appNavbar"
                aria-controls="appNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="appNavbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">Home</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav mx-2 mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            User
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link :to="{ name: 'user' }" class="dropdown-item" href="#">Username</router-link>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><button class="dropdown-item btn btn-danger" href="#">Logout</button></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'login' }" class="nav-link" aria-current="page">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'register' }" class="nav-link" aria-current="page">Register</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>