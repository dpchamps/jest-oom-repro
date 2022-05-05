
  describe("some-evil-spec=701", () => {
    it("evil-block-701", () => {
      window.evil_701 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  