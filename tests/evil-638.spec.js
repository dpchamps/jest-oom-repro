
  describe("some-evil-spec=638", () => {
    it("evil-block-638", () => {
      window.evil_638 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  