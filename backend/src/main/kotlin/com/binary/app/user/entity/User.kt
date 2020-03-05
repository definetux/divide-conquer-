package com.binary.app.user.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "users")
data class User (
    @Id
    @GeneratedValue
    @Column(name = "id")
    val id: Int,

    @Column(name = "name")
    var name: String,

    @Column(name = "age")
    var age: Int,

    @Column(name = "job")
    var job: String,

    @Column(name = "created_date")
    var createdDate: Date = Date()
)