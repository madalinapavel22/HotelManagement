package com.ISPrj.studentSys.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.Entity;
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
//@JsonInclude(JsonInclude.Include.NON_EMPTY)

public class Client {
    @Id
    private Integer code;
    private Integer nbCamera;
    private String nume;
    private String prenume;
    private String dataCazare;
    private String dataPlecare;

}

