
  describe("some-evil-spec=374", () => {
    it("evil-block-374", () => {
      window.evil_374 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  