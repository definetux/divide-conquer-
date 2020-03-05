package com.binary.app.auth

interface AuthProvider {
    fun authenticate(login: String, password: String): Boolean
}