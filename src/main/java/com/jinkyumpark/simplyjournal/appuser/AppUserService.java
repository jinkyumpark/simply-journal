package com.jinkyumpark.simplyjournal.appuser;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class AppUserService {
    private final String USER_EMAIL_DUPLICATION_MESSAGE = "이미 이 이메일로 가입된 회원이 있어요";
    private final String USER_DELETE_EMPTY_MESSAGE = "탈퇴하려는 회원이 존재하지 않아요";

    private AppUserRepository appUserRepository;

    public List<AppUser> getAllUsers() {
        return appUserRepository.findAll();
    }

    public void addUser(AppUser appUser) {
        Optional<AppUser> appUserOptional = appUserRepository.findByEmail(appUser.getEmail());

        if(appUserOptional.isPresent()) {
            throw new IllegalStateException(USER_EMAIL_DUPLICATION_MESSAGE);
        }

        appUserRepository.save(appUser);
    }

    public void deleteAppUser(Long id) {
        Optional<AppUser> appUserOptional = appUserRepository.findById(id);

        if(appUserOptional.isEmpty()) {
            throw new IllegalStateException(USER_DELETE_EMPTY_MESSAGE);
        }

        appUserRepository.delete(appUserOptional.get());
    }
}
