package com.jinkyumpark.simplyjournal.diary;

import com.jinkyumpark.simplyjournal.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface DiaryRepository extends JpaRepository<Diary, Long> {
    List<Diary> findAllByMemberAndDiaryDateBetweenOrderByDiaryDateDesc(Member member, LocalDateTime startDate, LocalDateTime endDate);
    List<Diary> findAllByContentContaining(String key);
}
