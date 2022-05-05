
  describe("some-evil-spec=114", () => {
    it("evil-block-114", () => {
      window.evil_114 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  