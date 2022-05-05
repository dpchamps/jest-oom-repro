
  describe("some-evil-spec=496", () => {
    it("evil-block-496", () => {
      window.evil_496 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  