
  describe("some-evil-spec=222", () => {
    it("evil-block-222", () => {
      window.evil_222 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  