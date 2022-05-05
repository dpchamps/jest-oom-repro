
  describe("some-evil-spec=467", () => {
    it("evil-block-467", () => {
      window.evil_467 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  