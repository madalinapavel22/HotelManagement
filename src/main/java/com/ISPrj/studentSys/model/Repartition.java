package com.ISPrj.studentSys.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;
@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Repartition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer idRepartition;
    private String password;
    private String username;

    ///repartitionNb...repartition e parintele
}
