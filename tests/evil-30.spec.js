
  describe("some-evil-spec=30", () => {
    it("evil-block-30", () => {
      window.evil_30 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  