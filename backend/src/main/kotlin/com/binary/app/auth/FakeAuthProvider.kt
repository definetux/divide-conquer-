package com.binary.app.auth

import org.springframework.context.annotation.Primary
import org.springframework.stereotype.Component

@Component
@Primary
class FakeAuthProvider: AuthProvider {
    override fun authenticate(login: String, password: String) = login == "admin" && password == "admin"
}