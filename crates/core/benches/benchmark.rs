use advent_of_code::solve;
use criterion::{criterion_group, criterion_main, Criterion};
use std::fs::read_to_string;

pub fn criterion_benchmark(c: &mut Criterion) {
    #![allow(clippy::unwrap_used)]
    for year in 2017..=2020 {
        let start_day = 1;
        let end_day = match year {
            2017 => 16,
            2020 => 7,
            _ => 25,
        };
        for day in start_day..=end_day {
            let input_path = format!("src/year{}/day{:02}_input.txt", year, day);
            let input = read_to_string(input_path).unwrap();

            for part in 1..=2 {
                let benchmark_name = format!("{}_{:02}_{}", year, day, part);
                c.bench_function(&benchmark_name, |b| {
                    b.iter(|| solve(year, day, part, &input));
                });
            }
        }
    }
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);