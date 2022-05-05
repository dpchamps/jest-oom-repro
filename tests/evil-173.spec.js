
  describe("some-evil-spec=173", () => {
    it("evil-block-173", () => {
      window.evil_173 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  