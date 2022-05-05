
  describe("some-evil-spec=799", () => {
    it("evil-block-799", () => {
      window.evil_799 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  