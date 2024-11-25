package com.cgi.library.base;

import com.cgi.library.security.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    JwtFilter jwtFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/getBooks").permitAll()
                .antMatchers("/signup").permitAll()
                .antMatchers("/login").permitAll()
                .antMatchers("/admin").permitAll()
                .antMatchers("/checkouts").hasRole("admin")
                .antMatchers(HttpMethod.POST, "/saveBook").hasRole("admin")
                .antMatchers(HttpMethod.POST, "/updateBook").hasRole("admin")
                .antMatchers(HttpMethod.DELETE, "/deleteBook").hasRole("admin")
                .antMatchers(HttpMethod.POST, "/updateCheckout").hasRole("admin")
                .antMatchers(HttpMethod.DELETE, "/deleteCheckout").hasRole("admin")
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();

        http.addFilterBefore(jwtFilter, BasicAuthenticationFilter.class);
    }
 }
