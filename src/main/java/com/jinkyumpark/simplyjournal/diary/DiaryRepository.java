package com.jinkyumpark.simplyjournal.diary;

import com.jinkyumpark.simplyjournal.appuser.AppUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long> {
    Page<Diary> findAllByMemberAndDiaryDateBetweenOrderByDiaryDateDesc(AppUser appUser, LocalDateTime startDate, LocalDateTime endDate, Pageable pageable);
    List<Diary> findAllByContentContaining(String key);
    List<Diary> findAllByMemberAndDiaryDateIs(AppUser appUser, LocalDateTime diaryDate);
}
