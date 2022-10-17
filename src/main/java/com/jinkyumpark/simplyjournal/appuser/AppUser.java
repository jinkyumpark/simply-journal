package com.jinkyumpark.simplyjournal.appuser;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.jinkyumpark.simplyjournal.diary.Diary;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

@Entity(name = "AppUser")
@Table(name = "app_user", uniqueConstraints = {
        @UniqueConstraint(name = "app_user_id_unique", columnNames = "id")
})
public class AppUser {
    @Id
    @SequenceGenerator(name = "app_user_sequence", sequenceName = "app_user_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "app_user_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "birthdate")
    private Timestamp birthDate;

    @OneToMany(mappedBy = "appUser", orphanRemoval = true, fetch = FetchType.LAZY)
    @JsonBackReference
    private List<Diary> diaryList;
}