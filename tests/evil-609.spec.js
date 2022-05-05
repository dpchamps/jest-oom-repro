
  describe("some-evil-spec=609", () => {
    it("evil-block-609", () => {
      window.evil_609 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  