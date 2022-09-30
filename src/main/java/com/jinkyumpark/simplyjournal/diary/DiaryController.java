package com.jinkyumpark.simplyjournal.diary;

import com.jinkyumpark.simplyjournal.diary.request.DiaryAddRequest;
import com.jinkyumpark.simplyjournal.diary.request.DiaryDeleteRequest;
import com.jinkyumpark.simplyjournal.diary.request.DiaryEditRequest;
import com.jinkyumpark.simplyjournal.diary.request.DiaryRequestMethod;
import lombok.AllArgsConstructor;
import org.apache.tomcat.jni.Local;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor

@RestController
@RequestMapping("/api/v1/diary")
@CrossOrigin("http://localhost:3000")

public class DiaryController {
    private DiaryService diaryService;

    @GetMapping
    public Page<Diary> getAllDiaries(@RequestParam(name = "id") String memberId,
                                     @RequestParam(name = "method", required = false) DiaryRequestMethod method,
                                     @RequestParam(name = "start", required = false) String start,
                                     @RequestParam(name = "end", required = false) String end,
                                     @RequestParam(name = "page", required = false) Integer page,
                                     @RequestParam(name = "size", required = false) Integer size
                                  ) {
        LocalDateTime startDate;
        LocalDateTime endDate;

        if(method == null) {
            method = DiaryRequestMethod.MONTH;
        }

        if(method.equals(DiaryRequestMethod.WEEK)) {
            LocalDateTime today = LocalDateTime.now();
            endDate = today;

            LocalDateTime oneWeekFromToday = today.minusWeeks(1);
            startDate = oneWeekFromToday;
        } else if (method.equals(DiaryRequestMethod.MONTH)) {
            LocalDateTime today = LocalDateTime.now();
            endDate = today;

            LocalDateTime oneMonthFromToday = today.minusMonths(1);
            startDate = oneMonthFromToday;
        } else if(method.equals(DiaryRequestMethod.YEAR)) {
            LocalDateTime today = LocalDateTime.now();
            endDate = today;

            LocalDateTime oneYearFromToday = today.minusYears(1);
            startDate = oneYearFromToday;
        } else if(method.equals(DiaryRequestMethod.ALL)) {
            LocalDateTime today = LocalDateTime.now();
            endDate = today;

            LocalDateTime beginning = LocalDateTime.MIN;
            startDate = beginning;
        } else if(method.equals(DiaryRequestMethod.RANGE)) {
            int startYear = Integer.parseInt(start.substring(0, 4));
            int startMonth = Integer.parseInt(start.substring(4, 6));
            int startDay = Integer.parseInt(start.substring(6));
            startDate = LocalDateTime.of(startYear, startMonth, startDay, 0, 0);

            int endYear = Integer.parseInt(end.substring(0, 4));
            int endMonth = Integer.parseInt(end.substring(4, 6));
            int endDay = Integer.parseInt(end.substring(6));
            endDate = LocalDateTime.of(endYear, endMonth, endDay, 23, 59);
        } else {
            throw new IllegalStateException("method를 다시 확인해 주세요");
        }

        PageRequest pageRequest = PageRequest.of(page == null ? 0 : page, size == null ? 10 : size);

        Page<Diary> diaryList = diaryService.getDiariesByMemberIdWithRange(memberId, startDate, endDate, pageRequest);
        return diaryList;
    }

    @GetMapping("{id}")
    public Diary getDiary(@PathVariable("id") Long id) {
        return diaryService.getDiaryById(id);
    }

    @GetMapping("search/{key}")
    public List<Diary> getDiarySerachResult(@PathVariable("key") String key) {
        return diaryService.getDiariesByKey(key);
    }

    @PutMapping("{id}")
    public void editDiary(@RequestBody @Valid DiaryEditRequest diaryEditRequest,
                          @PathVariable("id") Long id) {
        diaryService.editDiary(diaryEditRequest, id);
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