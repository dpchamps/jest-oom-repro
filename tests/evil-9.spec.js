
  describe("some-evil-spec=9", () => {
    it("evil-block-9", () => {
      window.evil_9 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  