package com.jinkyumpark.occurencejournal.member;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode

@Entity(name = "Member")
@Table(name = "member", uniqueConstraints = {
        @UniqueConstraint(name = "member_id_unique", columnNames = "member_id")
})
public class Member {
    @Id
    @SequenceGenerator(name = "member_sequence", sequenceName = "member_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "member_sequence")
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "member_id", nullable = false)
    private String memberId;

    @Column(name = "birthdate")
    private Timestamp birthDate;
}