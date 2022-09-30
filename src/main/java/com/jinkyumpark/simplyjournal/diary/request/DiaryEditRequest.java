package com.jinkyumpark.simplyjournal.diary.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class DiaryEditRequest {
    private String content;
    private LocalDateTime date;
    private Boolean isSpecial;
    private Boolean isPublic;
    private String emotion;
}
