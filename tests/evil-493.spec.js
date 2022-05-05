
  describe("some-evil-spec=493", () => {
    it("evil-block-493", () => {
      window.evil_493 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  