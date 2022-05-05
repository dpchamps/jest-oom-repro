
  describe("some-evil-spec=854", () => {
    it("evil-block-854", () => {
      window.evil_854 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  