
  describe("some-evil-spec=312", () => {
    it("evil-block-312", () => {
      window.evil_312 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  