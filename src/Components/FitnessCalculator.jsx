"use client"

import React, { useState } from "react"
import FitnessForm from "./FitnessForm"
import FitnessAnalysis from "./FitnessAnalysis"

export default function FitnessCalculator() {
  const [analysis, setAnalysis] = useState(null)

  const calculateFitness = (userData) => {
    const { height, weight, age, gender, activityLevel } = userData
    const heightInMeters = Number.parseFloat(height) / 100
    const weightInKg = Number.parseFloat(weight)
    const ageInYears = Number.parseInt(age)
    const bmi = weightInKg / (heightInMeters * heightInMeters)

    const analysis = {
      bmi: bmi.toFixed(2),
      category: "",
      dailyCalories: 0,
      recommendation: "",
    }

    if (bmi < 18.5) {
      analysis.category = "Underweight"
      analysis.recommendation =
        "Focus on increasing calorie intake with nutrient-dense foods and start a strength training program."
    } else if (bmi >= 18.5 && bmi < 25) {
      analysis.category = "Normal weight"
      analysis.recommendation = "Maintain a balanced diet and regular exercise routine to stay healthy."
    } else if (bmi >= 25 && bmi < 30) {
      analysis.category = "Overweight"
      analysis.recommendation =
        "Focus on creating a slight calorie deficit through diet and increase cardiovascular exercise."
    } else {
      analysis.category = "Obese"
      analysis.recommendation =
        "Consult with a healthcare professional for a personalized weight loss plan. Focus on creating a sustainable calorie deficit and increasing physical activity."
    }

    // Calculate daily calorie needs (using Harris-Benedict equation)
    let bmr
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weightInKg + 4.799 * Number.parseFloat(height) - 5.677 * ageInYears
    } else {
      bmr = 447.593 + 9.247 * weightInKg + 3.098 * Number.parseFloat(height) - 4.33 * ageInYears
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    }

    analysis.dailyCalories = Math.round(bmr * activityMultipliers[activityLevel])

    setAnalysis(analysis)
  }

  return (
    <div className=" flex-col justify-center sm:py-12 md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl  flex items-center bg-white m-6 rounded-xl ">
            {!analysis ? (
              <FitnessForm onSubmit={calculateFitness} />
            ) : (
              <FitnessAnalysis analysis={analysis} onReset={() => setAnalysis(null)} />
            )}
          </div>
      
  
    
  )
}




