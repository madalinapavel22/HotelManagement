package com.ISPrj.studentSys.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Sector4 {
    @Id
    private Integer RoomNb;
    private Integer idRepartition=4;

}