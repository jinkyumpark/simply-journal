package com.jinkyumpark.simplyjournal.appuser;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/user")
public class AppUserController {
    private AppUserService userService;

    @PostMapping
    public void addAppUser(@RequestBody @Valid AppUser appUser) {
        userService.addUser(appUser);
    }

    @DeleteMapping("{id}")
    public void deleteAppUser(@PathVariable("id") Long id) {
        userService.deleteAppUser(id);
    }
}
