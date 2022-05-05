
  describe("some-evil-spec=811", () => {
    it("evil-block-811", () => {
      window.evil_811 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  