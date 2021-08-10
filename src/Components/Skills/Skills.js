import React, { useEffect, useState } from 'react';
import './skills.scss';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div class="skills-content">
        <div class="left">
          <div class="text">My creative skills & experiences.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, ratione error est recusandae consequatur, iusto illum
            deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate
            recusandae laudantium esse, harum animi aspernatur quisquam et
            delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad
            delectus natus aut hic explicabo minus quod.
          </p>
        </div>
        <div class="right">
          <div class="bars">
            <div class="info">
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div class="line html"></div>
          </div>
          <div class="bars">
            <div class="info">
              <span>CSS</span>
              <span>60%</span>
            </div>
            <div class="line css"></div>
          </div>
          <div class="bars">
            <div class="info">
              <span>JavaScript</span>
              <span>80%</span>
            </div>
            <div class="line js"></div>
          </div>
          <div class="bars">
            <div class="info">
              <span>PHP</span>
              <span>50%</span>
            </div>
            <div class="line php"></div>
          </div>
          <div class="bars">
            <div class="info">
              <span>MySQL</span>
              <span>70%</span>
            </div>
            <div class="line mysql"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
