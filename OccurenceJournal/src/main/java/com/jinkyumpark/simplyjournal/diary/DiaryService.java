package com.jinkyumpark.simplyjournal.diary;

import com.jinkyumpark.simplyjournal.member.Member;
import com.jinkyumpark.simplyjournal.member.MemberRepository;
import com.jinkyumpark.simplyjournal.diary.request.DiaryAddRequest;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor

@Service
public class DiaryService {
    private DiaryRepository diaryRepository;
    private MemberRepository memberRepository;

    public List<Diary> getDiariesByMemberIdWithRange(String memberId, Integer year, Integer month) {
        Optional<Member> memberOptional = memberRepository.findByMemberId(memberId);

        if(memberOptional.isEmpty()) {
            throw new IllegalStateException("User does not exists");
        }

        LocalDateTime startDate = LocalDate.of(year, month, 1).atStartOfDay();
        LocalDateTime endDate = LocalDate.of(year, month,
                LocalDate.of(year, month, 1).lengthOfMonth()
                ).atStartOfDay();

        return diaryRepository.findAllByMemberAndDiaryDateBetweenOrderByDiaryDateDesc(memberOptional.get(), startDate, endDate);
    }

    public Diary getDiaryById(Long id) {
        Optional<Diary> diaryOptional = diaryRepository.findById(id);

        if(diaryOptional.isEmpty()) {
            throw new IllegalStateException("Diary does not exists");
        }

        return diaryOptional.get();
    }

    public void addDiary(DiaryAddRequest diaryAddRequest) {
        Diary diary = new Diary();

        if(diaryAddRequest.getDiaryDate() == null) {
            diary.setDiaryDate(LocalDateTime.now());
        } else {
            diary.setDiaryDate(diaryAddRequest.getDiaryDate());
        }

        Optional<Member> memberOptional = memberRepository.findById(diaryAddRequest.getMemberId());
        if(memberOptional.isEmpty()) {
            throw new IllegalStateException("User does not exists");
        }
        diary.setMember(memberOptional.get());
        diary.setContent(diaryAddRequest.getContent());
        diary.setEmotion(Emotion.valueOf(diaryAddRequest.getEmotion()));
        diary.setSpecial(diaryAddRequest.isSpecial());

        diaryRepository.save(diary);
    }

    public void deleteDiary(Long postId) {
        Optional<Diary> postOptional = diaryRepository.findById(postId);

        if(postOptional.isEmpty()) throw new IllegalStateException("Post Not Found");

        diaryRepository.deleteById(postId);
    }

    public List<Diary> getDiariesByKey(String key) {
        return diaryRepository.findAllByContentContaining(key);
    }
}
