package com.jinkyumpark.simplyjournal.diary;

import com.jinkyumpark.simplyjournal.diary.request.DiaryAddRequest;
import com.jinkyumpark.simplyjournal.diary.request.DiaryDeleteRequest;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor

@RestController
@RequestMapping("/api/v1/diary")
@CrossOrigin("http://localhost:3000")

public class DiaryController {
    private DiaryService diaryService;

    @GetMapping("all")
    public List<Diary> getAllDiaries(@RequestParam(name = "id") String memberId,
                                     @RequestParam(name = "year", required = false) Integer year,
                                     @RequestParam(name = "month", required = false) Integer month
                                  ) {
        if(year == null) year = LocalDateTime.now().getYear();
        if(month == null) month = LocalDateTime.now().getMonthValue();

        List<Diary> diaryList = diaryService.getDiariesByMemberIdWithRange(memberId, year, month);

        return diaryList;
    }

    @GetMapping("{id}")
    public Diary getDiary(@PathVariable("id") Long id) {
        return diaryService.getDiaryById(id);
    }

    @PostMapping
    public void addDiary(@RequestBody @Valid DiaryAddRequest diaryAddRequest) {
        diaryService.addDiary(diaryAddRequest);
    }

    @DeleteMapping
    public void deleteDiary(@RequestBody @Valid DiaryDeleteRequest diaryDeleteRequest) {
        diaryService.deleteDiary(diaryDeleteRequest.getId());
    }
}