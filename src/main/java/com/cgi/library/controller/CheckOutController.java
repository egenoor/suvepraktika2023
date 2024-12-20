package com.cgi.library.controller;

import com.cgi.library.model.CheckOutDTO;
import com.cgi.library.service.CheckOutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/checkout")
public class CheckOutController {

    @Autowired
    private CheckOutService checkOutService;

    @GetMapping(value = "getCheckouts")
    public ResponseEntity<Page<CheckOutDTO>> getCheckOuts(Pageable pageable) {
        return ResponseEntity.ok(checkOutService.getCheckOuts(pageable));
    }

    @GetMapping(value = "getCheckout")
    public ResponseEntity<CheckOutDTO> getCheckOut(@RequestParam(value = "checkoutId") UUID checkoutId) {
        return ResponseEntity.ok(checkOutService.getCheckOut(checkoutId));
    }

    @PostMapping(value = "saveCheckout")
    public ResponseEntity<String> saveCheckOut(@RequestBody CheckOutDTO checkOutDTO) {
        checkOutService.saveCheckOut(checkOutDTO);
        return ResponseEntity.ok("");
    }

    @PostMapping(value = "updateCheckout")
    public ResponseEntity<String> updateCheckOut(@RequestBody CheckOutDTO checkOutDTO) {
        checkOutService.updateCheckOut(checkOutDTO);
        return ResponseEntity.ok("");
    }

    @DeleteMapping(value = "deleteCheckout")
    public ResponseEntity<String> deleteCheckOut(@RequestParam(value = "checkoutId") UUID checkoutId) {
        checkOutService.deleteCheckOut(checkoutId);
        return ResponseEntity.ok("");
    }
}
