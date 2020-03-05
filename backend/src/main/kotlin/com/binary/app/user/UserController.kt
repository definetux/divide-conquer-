package com.binary.app.user

import com.binary.app.user.dto.UserDto
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("user")
class UserController (val userService: UserService) {
    @GetMapping
    fun getUsers() = userService.getAll()

    @PostMapping
    fun save(@RequestBody user: UserDto) = userService.save(user)

    @DeleteMapping("/{id}")
    fun remove(@PathVariable id: Int) = userService.remove(id)
}