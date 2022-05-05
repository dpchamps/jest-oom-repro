
  describe("some-evil-spec=326", () => {
    it("evil-block-326", () => {
      window.evil_326 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  