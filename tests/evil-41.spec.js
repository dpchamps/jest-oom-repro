
  describe("some-evil-spec=41", () => {
    it("evil-block-41", () => {
      window.evil_41 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  