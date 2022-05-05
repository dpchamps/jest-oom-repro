
  describe("some-evil-spec=802", () => {
    it("evil-block-802", () => {
      window.evil_802 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  