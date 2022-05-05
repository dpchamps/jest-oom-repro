
  describe("some-evil-spec=911", () => {
    it("evil-block-911", () => {
      window.evil_911 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  