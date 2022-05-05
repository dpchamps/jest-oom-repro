
  describe("some-evil-spec=93", () => {
    it("evil-block-93", () => {
      window.evil_93 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  