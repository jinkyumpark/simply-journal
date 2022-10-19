package com.jinkyumpark.simplyjournal;

import com.jinkyumpark.simplyjournal.appuser.AppUser;
import com.jinkyumpark.simplyjournal.appuser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Profile("dev")
@RestController
@RequestMapping("dev")
@AllArgsConstructor
public class DevController {
    private AppUserService userService;

    @GetMapping("user/all")
    public List<AppUser> getAllAppUser() {
        return userService.getAllUsers();
    }
}
