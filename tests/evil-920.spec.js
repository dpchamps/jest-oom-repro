
  describe("some-evil-spec=920", () => {
    it("evil-block-920", () => {
      window.evil_920 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  