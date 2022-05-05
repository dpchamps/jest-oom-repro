
  describe("some-evil-spec=220", () => {
    it("evil-block-220", () => {
      window.evil_220 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  