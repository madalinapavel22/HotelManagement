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
public class Manager {
    @Id
    private String password;
    private String username;

}