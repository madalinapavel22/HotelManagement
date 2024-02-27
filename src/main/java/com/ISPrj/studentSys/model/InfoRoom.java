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

public class InfoRoom {
    @Id
    private Integer RoomNb;
    private String alertHousekeeping;
    private Integer dnd;

    public Integer getRoomNb() {
        return RoomNb;
    }

    public void setRoomNb(Integer roomNb) {
        RoomNb = roomNb;
    }

    public String getAlertHousekeeping() {
        return alertHousekeeping;
    }

    public void setAlertHousekeeping(String alertHousekeeping) {
        this.alertHousekeeping = alertHousekeeping;
    }

    public Integer getDnd() {
        return dnd;
    }

    public void setDnd(Integer dnd) {
        this.dnd = dnd;
    }

    public Integer getToiletPaper() {
        return toiletPaper;
    }

    public void setToiletPaper(Integer toiletPaper) {
        this.toiletPaper = toiletPaper;
    }

    public Integer getSoap() {
        return soap;
    }

    public void setSoap(Integer soap) {
        this.soap = soap;
    }

    public Integer getTowels() {
        return towels;
    }

    public void setTowels(Integer towels) {
        this.towels = towels;
    }

    public Float getValueTips() {
        return valueTips;
    }

    public void setValueTips(Float valueTips) {
        this.valueTips = valueTips;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    private Integer toiletPaper;
    private Integer soap;
    private Integer towels;
    private Float valueTips;
    private String review;

}